import { TextBlock } from "@/components/TextBlock";

export default function Maintenance() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>  </h1>
      <h1 style={{ fontSize: '2em', color: '#FF6347', fontFamily: 'Consolas' }}>Maintenance Mode &#128012;</h1>
      <p style={{ fontSize: '1.2em', color: '#696969', fontFamily: 'Consolas', fontWeight: 'bold' }}>
        My website is currently undergoing some maintenance. Please check back later!
      </p>
    </div>
  );
  }