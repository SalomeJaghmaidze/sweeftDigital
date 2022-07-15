import { Card, Image } from "../MainStyles";

export default function UserCard({user}) {
  return (
    <Card>
      <Image src={user.imageUrl + "?v=" + user.id} alt={user.title} />
      <h1>
        {user.prefix} {user.name} {user.lastName}
      </h1>
      <p>{user.title + user.id}</p>
    </Card>
  );
}