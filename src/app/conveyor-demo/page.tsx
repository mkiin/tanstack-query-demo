import BeltConveyor from '@/components/belt-conveyor';

export default function ConveyorDemo() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
      }}>
        ベルトコンベアアニメーション
      </h1>
      <BeltConveyor />
    </div>
  );
}
