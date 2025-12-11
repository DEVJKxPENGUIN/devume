import styles from './Header.module.css';
import {UserRequest, UserResponse} from "@/proto/generated/User_pb";
import {Metadata} from "@grpc/grpc-js";
import {getUserClient, grpcRequest} from "@/utils/grpcHandler";
import {Bar} from "@/components/layout/header/Bar";

export const Header = async () => {
  const user: UserResponse = await fetchUser()

  return (
      <header className={styles.header}>
        <Bar nickname={user.getNickname()} role={user.getRole()}/>
      </header>
  );
};

const fetchUser = async (): Promise<UserResponse> => {
  try {
    const request = new UserRequest()
    const meta = new Metadata()
    return await grpcRequest(getUserClient(), 'getUser', meta, request)
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    throw new Error('Failed to fetch user')
  }
}