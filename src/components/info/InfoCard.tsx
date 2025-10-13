import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const InfoCard = ({ title, icon: Icon, children }: InfoCardProps) => {
  return (
    <div className="bg-card rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground">
          {title}
        </h3>
      </div>
      <div className="text-sm sm:text-base text-muted-foreground">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
