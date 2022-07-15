import { Card, Image } from "../MainStyles";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Link
      to={"/user/" + user.id}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Card>
        <Image src={user.imageUrl + "?v=" + user.id} alt={user.title} />
        <h1>
          {user.prefix} {user.name} {user.lastName}
        </h1>
        <p>{user.title + user.id}</p>
      </Card>
    </Link>
  );
}
