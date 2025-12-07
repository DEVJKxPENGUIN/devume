import Link from 'next/link';
import styles from './Header.module.css';
import {UserRequest, UserResponse} from "@/proto/generated/User_pb";
import {Metadata} from "@grpc/grpc-js";
import {getUserClient, grpcRequest} from "@/utils/grpcHandler";

export const Header = async () => {

  const user = await fetchUser()

  return (
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            DEVUME
          </Link>
          <nav className={styles.nav}>
            <UserBar user={user}/>
          </nav>
        </div>
      </header>
  );
};

interface Props {
  user: UserResponse;
}

function UserBar(props: Props) {

  const user = props.user

  if (user.getRole() === 'GUEST') {
    return (
        <Link href="/login" className={styles.navLink}>
          Login
        </Link>
    )
  }

  return (
      <Link href="#" className={styles.navLink}>
        {user.getNickname()}
      </Link>
  )
}


async function fetchUser(): Promise<UserResponse> {
  try {
    const request = new UserRequest()
    const meta = new Metadata()
    return await grpcRequest(getUserClient(), 'getUser', meta, request)
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    throw new Error('Failed to fetch user')
  }
}