import { Button } from '@/components/button';
import Input from '@/components/input';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>CanedoDev</h1>
      <div>
        <Input />
      </div>
      <div>
        <Button>Test</Button>
      </div>
    </div>
  );
}
