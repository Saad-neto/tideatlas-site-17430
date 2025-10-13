interface AdSpaceProps {
  position: 'top' | 'middle' | 'middle2' | 'bottom';
  size?: string;
}

const AdSpace = ({ position, size = 'auto' }: AdSpaceProps) => {
  const sizeMap = {
    top: '728x90 ou responsivo',
    middle: '336x280 ou responsivo',
    middle2: '728x90 ou responsivo',
    bottom: '970x90 ou responsivo'
  };

  return (
    <div className="bg-ad-bg border-2 border-dashed border-ad-border rounded-lg p-6 sm:p-8 text-center my-4 sm:my-6">
      <p className="text-muted-foreground text-xs sm:text-sm">
        📢 Google AdSense - {position === 'top' && 'Banner Superior'} 
        {position === 'middle' && 'Banner Meio'} 
        {position === 'middle2' && 'Banner Meio 2'} 
        {position === 'bottom' && 'Banner Inferior'} ({sizeMap[position]})
      </p>
      {/* 
        Comentário para futura integração:
        <ins className="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXX"
             data-ad-slot="XXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      */}
    </div>
  );
};

export default AdSpace;
