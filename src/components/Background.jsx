const Background = () => {
    return (
      <div className="fixed inset-0 -z-10 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-900/40 blur-[100px] animate-blob" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-cyan-900/40 blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-900/40 blur-[100px] animate-blob animation-delay-4000" />
        </div>
        
        <div className="absolute inset-0 bg-neutral-950/20" />
      </div>
    );
  };
  
  export default Background;
