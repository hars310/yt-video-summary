"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserAvatar({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{name[0]}</AvatarFallback>
    </Avatar>
  );
}