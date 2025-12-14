import styles from './Header.module.css';
import {UserResponse} from "@/proto/generated/User_pb";
import {Bar} from "@/components/layout/header/Bar";
import {getUser} from "@/utils/commons";

export default async function Header() {
  const user: UserResponse = await getUser()
  return (
      <header className={styles.header}>
        <Bar nickname={user.getNickname()} role={user.getRole()}/>
      </header>
  )
}