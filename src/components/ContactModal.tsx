import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://functions.poehali.dev/be7ee367-e7cb-4bd8-b97e-ee0739e48c0d', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setPhone('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(26,92,74,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8 relative"
        style={{ backgroundColor: '#ffffff' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:opacity-70"
          style={{ backgroundColor: '#f9f8f9' }}
        >
          <Icon name="X" size={16} style={{ color: '#1a5c4a' }} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#e8f7f0' }}>
              <Icon name="CheckCircle" size={32} style={{ color: '#1a5c4a' }} />
            </div>
            <h3 className="font-bold text-xl mb-2" style={{ color: '#1a5c4a' }}>Заявка отправлена!</h3>
            <p className="font-medium" style={{ color: '#1a3336', fontSize: '0.95rem' }}>
              Мы свяжемся с вами в ближайшее время для персонального разбора.
            </p>
            <button
              onClick={onClose}
              className="mt-6 font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#1a5c4a', color: '#ffe1a2', fontSize: '0.95rem' }}
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1a5c4a' }}>
                  <Icon name="MessageCircle" size={16} style={{ color: '#ffe1a2' }} />
                </div>
                <h3 className="font-bold text-xl" style={{ color: '#1a5c4a' }}>Персональный разбор</h3>
              </div>
              <p className="font-medium" style={{ color: '#1a3336', fontSize: '0.9rem' }}>
                Оставьте контакты — эксперт свяжется с вами и ответит на все вопросы
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-bold text-sm mb-1.5" style={{ color: '#1a5c4a' }}>Имя</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как вас зовут?"
                  className="w-full px-4 py-3 rounded-xl border-2 font-medium outline-none transition-all duration-200 focus:border-teal-600"
                  style={{ borderColor: '#e8f0f1', color: '#0d1f21', fontSize: '0.95rem', backgroundColor: '#f9f8f9' }}
                />
              </div>
              <div>
                <label className="block font-bold text-sm mb-1.5" style={{ color: '#1a5c4a' }}>Телефон</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-xl border-2 font-medium outline-none transition-all duration-200 focus:border-teal-600"
                  style={{ borderColor: '#e8f0f1', color: '#0d1f21', fontSize: '0.95rem', backgroundColor: '#f9f8f9' }}
                />
              </div>

              {status === 'error' && (
                <p className="font-medium text-sm" style={{ color: '#c0392b' }}>
                  Не удалось отправить. Попробуйте ещё раз или напишите напрямую.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full font-bold py-3.5 rounded-xl transition-all duration-200 hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: '#1a5c4a', color: '#ffe1a2', fontSize: '0.95rem' }}
              >
                {status === 'loading' ? 'Отправляем...' : 'Получить разбор'}
              </button>

              <p className="text-center font-medium text-xs" style={{ color: '#1a3336', opacity: 0.6 }}>
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;