import Icon from '@/components/ui/icon';
import { reachGoal } from '@/lib/metrika';

interface Props {
  prefix: string;
}

const ButtonsKrimekurort = ({ prefix }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="https://max.ru/channel_ybk"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => reachGoal(`krimekurort_${prefix}_channel_click`)}
        className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:opacity-90"
        style={{ backgroundColor: '#ffe1a2', color: '#18352e', fontSize: '0.95rem' }}
      >
        <Icon name="Send" size={16} />
        Перейти в канал Max
      </a>
      <a
        href="https://max.ru/join/YEB9k3x3YAkcN6J9w4P8YSyXXbBnDPt-7So2wL1UZGc"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => reachGoal(`krimekurort_${prefix}_chat_click`)}
        className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-200"
        style={{ border: '2px solid #18352e', color: '#18352e', fontSize: '0.95rem' }}
      >
        <Icon name="Zap" size={16} />
        Перейти в чат Max
      </a>
    </div>
  );
};

export default ButtonsKrimekurort;
