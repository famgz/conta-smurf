import logout from '@/app/(auth)/_actions/logout';
import { Button } from '@/app/_components/ui/button';
import { LogOutIcon } from 'lucide-react';

export default function LogoutButton() {
  return (
    <form action={logout}>
      <Button
        type="submit"
        className="flex-center size-9 rounded-full bg-light p-0"
      >
        <LogOutIcon />
      </Button>
    </form>
  );
}
