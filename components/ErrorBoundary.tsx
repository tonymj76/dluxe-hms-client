
import {useRouter} from "next/router";
import IndexStyle from "public/css/index.module.css";
import Link from "next/link";

interface IProps {
  error: any
}
export const ErrorFallback = ({error}: IProps) => {
  return (
    <div >
      <div>
        <div>
          <div>
            {error.message}
          </div>
          <Link href="/">
            <div className={IndexStyle.bookNow}>
              Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
