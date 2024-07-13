import { Link } from "@inertiajs/react";

export default function Header({ headLines }) {
    let activeClasses = " text-sky-500 border-current";
    let inActiveClasses =
        " text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700";
    return (
        <div className="flex-none min-w-full">
            <ul className="border-b border-slate-200 space-x-6 flex flex-wrap whitespace-nowrap dark:border-slate-200/5 mb-px">
                {headLines.map((headLine, index) => {
                    const routeName = Object.keys(headLine)[0];
                    const isActive = route().current(routeName);
                    return (
                        <li key={index}>
                            <h2>
                                <Link
                                    className={
                                        "flex text-sm leading-6 font-semibold border-b-2 -mb-px" +
                                        (isActive
                                            ? activeClasses
                                            : inActiveClasses)
                                    }
                                    href={
                                        route().has(routeName)
                                            ? route(routeName)
                                            : "#"
                                    }
                                >
                                    {headLine[Object.keys(headLine)[0]]}
                                </Link>
                            </h2>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
