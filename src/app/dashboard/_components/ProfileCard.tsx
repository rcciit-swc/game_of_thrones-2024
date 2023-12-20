import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { removeUser } from '@/redux/slices/user';
import { logOut } from '@/utils/functions/logout';
import { Dropdown } from 'flowbite-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const ProfileCard = () => {
  const user:any = useAppSelector((state) => state.user?.user!);
  const { userData, data } = user;
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="block md:hidden">
          <Dropdown
            className="bg-body  text-white "
            label={
              <Image
                src={userData?.user_metadata?.avatar_url}
                className="w-9  cursor-pointer pr-2 rounded-full transition-colors duration-500 ease-in-out hover:scale-105  "
                width={0}
                height={0}
                alt="logo"
              />
            }
            dismissOnClick={false}
          >
            <Dropdown.Item>Show Profile</Dropdown.Item>

            <Dropdown.Item onClick={()=>{
              logOut().then(()=>{
                router.push('/')
                dispatch(removeUser())
               
              })
            }}>Logout</Dropdown.Item>
          </Dropdown>
        </div>
  )
}

export default ProfileCard