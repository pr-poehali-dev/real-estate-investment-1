import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки из формы обратной связи на почту avaco-m@yandex.ru и oktmk@mail.ru"""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    try:
        body = json.loads(event.get('body') or '{}')
    except Exception:
        body = {}

    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False),
        }

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    smtp_user = 'avaco-m@yandex.ru'
    recipients = ['avaco-m@yandex.ru', 'oktmk@mail.ru']

    subject = 'Новая заявка с сайта Южный Берег Капитала'
    html_body = f"""
    <h2>Новая заявка с сайта</h2>
    <p><strong>Имя:</strong> {name}</p>
    <p><strong>Телефон:</strong> {phone}</p>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = smtp_user
    msg['To'] = ', '.join(recipients)
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    try:
        with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, recipients, msg.as_string())
    except smtplib.SMTPAuthenticationError as e:
        print(f'[SMTP AUTH ERROR] {e}')
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': 'smtp_auth', 'detail': str(e)}, ensure_ascii=False),
        }
    except Exception as e:
        print(f'[SMTP ERROR] {e}')
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': 'smtp_error', 'detail': str(e)}, ensure_ascii=False),
        }

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'ok': True}),
    }
