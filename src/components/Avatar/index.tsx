import Image from 'next/image'
import AvatarImg from '@public/images/avatar.jpg'
const Avatar = () => (
  <Image src={AvatarImg} width="340px" height="350px" alt="Uma foto minha" />
)

export default Avatar
