import { useEffect } from 'react';
import {
    useDark,
    useSetDark,
    ThemeContextProvider,
  } from '../../components/contexts/theme-context';
  import { useGetUser, UserContextProvider } from '../../components/contexts/user-context';

function Setting() {
    const dark = useDark();
    const user = useGetUser();
    const setDark = useSetDark();

    useEffect(() => {
        console.log("re-rendered");
        localStorage.setItem("is_dark", dark);
        if (dark) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }

        localStorage.setItem("is_dark", dark);
      })

    return (
        <div className='bg-gray-100 dark:bg-gray-900 h-screen'>
          <div className='container'>
            <div className='text-gray-900 dark:text-white'>
              Wanna change some preferences {user}?
            </div>
            <button className='mt-5 bg-blue-400 rounded-md p-2 text-white dark:text-gray-900' onClick={() => setDark(!dark)}>Dark Toggle</button>
          </div>
        </div>
      );
}

export default function SettingWrapper() {
    return (
        <UserContextProvider>
            <ThemeContextProvider>
                <Setting />
            </ThemeContextProvider>
        </UserContextProvider>
    )
}