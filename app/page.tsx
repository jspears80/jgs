export default function Page() {
  return (
    <main
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#03040a', // deep neutral base
        backgroundImage: `
          radial-gradient(circle at 50% -10%, rgba(0, 200, 255, 0.22), transparent 60%),
          radial-gradient(circle at 50% 120%, rgba(0, 255, 180, 0.12), transparent 55%),
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px',
        maskImage:
          'radial-gradient(70% 70% at 50% 40%, black 70%, transparent 100%)',
        WebkitMaskImage:
          'radial-gradient(70% 70% at 50% 40%, black 70%, transparent 100%)',
      }}
    />
  );
}
