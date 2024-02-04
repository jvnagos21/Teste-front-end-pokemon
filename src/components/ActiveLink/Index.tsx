import { useContext } from "react";
import { ScheduleContext } from "../../Context/ScheduleContext";
import { useRouter } from "next/router";

function ActiveLink({ children, href }: { children: string; href: string }) {
  const { setIsError } = useContext(ScheduleContext);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsError(undefined);
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

export default ActiveLink;
