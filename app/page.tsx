export default function Page() {
  return (
    <main
      style={{
        minHeight: '100vh',
        width: '100%',
        background:
          'radial-gradient(circle at 50% 20%, rgba(0,255,200,0.12), transparent 60%), radial-gradient(circle at 50% 100%, rgba(0,150,255,0.18), transparent 60%)',
        backgroundColor: '#050505',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '48px 48px, 48px 48px',
      }}
    />
  );
}
