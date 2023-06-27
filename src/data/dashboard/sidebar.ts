import { HiOutlineUser } from 'react-icons/hi'
import { MdOutlineBusinessCenter, MdOutlineSpaceDashboard } from 'react-icons/md'
import { CiPaperplane } from 'react-icons/ci'
import { VscNote } from 'react-icons/vsc'
import { BiMessageRoundedDots, BiPackage } from 'react-icons/bi'
import { BsBell, BsBookmark, BsTrash3 } from 'react-icons/bs'
import { RiLockPasswordLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineLogout } from 'react-icons/ai'


export const sideLinks = [
    {
        name: 'dashboard',
        path: '/dashboard',
        icon: MdOutlineSpaceDashboard,
    },
    {
        name: 'company profile',
        path: '/dashboard/company',
        icon: HiOutlineUser,
    },
    {
        name: 'post a new job',
        path: '/dashboard/company/post-a-new-job',
        icon: CiPaperplane,
    },
    {
        name: 'manage jobs',
        path: '/dashboard/company/manage-jobs',
        icon: MdOutlineBusinessCenter,
    },
    {
        name: 'all applicants',
        path: '/dashboard/company/all-applicants',
        icon: VscNote,
    },
    {
        name: 'shortlisted resumes',
        path: '/dashboard/company/shortlisted-resumes',
        icon: BsBookmark,
    },
    {
        name: 'packages',
        path: '/dashboard/company/packages',
        icon: BiPackage,
    },
    {
        name: 'messages',
        path: '/dashboard/company/messages',
        icon: BiMessageRoundedDots,
    },
    {
        name: 'resume alerts',
        path: '/dashboard/company/resume-alerts',
        icon: BsBell,
    },
    {
        name: 'change password',
        path: '/dashboard/company/change-password',
        icon: RiLockPasswordLine,
    },
    {
        name: 'view profile',
        path: '/dashboard/company/view-profile',
        icon: CgProfile,
    },
    {
        name: 'logout',
        path: '/dashboard/company/logout',
        icon: AiOutlineLogout,
    },
    {
        name: 'delete profile',
        path: '/dashboard/company/delete-profile',
        icon: BsTrash3,
    },
]