// app/routes/index.tsx

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="p-6">
      <Input />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-md">test</Button>
        </DialogTrigger>
        <DialogContent>test</DialogContent>
      </Dialog>
    </div>
  );
}
