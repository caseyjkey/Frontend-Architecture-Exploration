import { IoMdArrowRoundDown } from '@react-icons/all-files/io/IoMdArrowRoundDown';
import type { ComponentProps } from 'react';

type IconProps = ComponentProps<typeof IoMdArrowRoundDown>;

export default function ArrowIcon(props: IconProps) {
    return <IoMdArrowRoundDown {...props} />;
}