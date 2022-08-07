import Link from 'next/link';
import { useEffect } from 'react';
import {
  ThemeContextProvider,
  useDark,
  useSetDark
} from '../components/contexts/theme-context';
import { useGetUser, UserContextProvider, useSetUser } from '../components/contexts/user-context';
import { ListItemState } from '../components/states/list-item-state';
import { State } from '../components/utils/state';
import { Setting } from './setting/setting';

function ListData() {

  const state = ListItemState.state();
  const data = ListItemState.listData();
  const message = ListItemState.message();
  const getListData = ListItemState.getListData();
  const setStateError = ListItemState.setStateError();

  useEffect(() => {
    
    if (state === State.Initial) {
      getListData();
    }
  }, [])

  const handleReload = () => getListData();

  const handleState = () => {
    if (state === State.Initial) {
      return <div className='text-white'>Item will be load</div>;
    } else if (state === State.Loading) {
      return <div className='text-white'>Loading...</div>;
    } else if (state === State.Loaded) {
      let view = data.map((e) => {
        return <div>
          <div>{e.company}</div>
          <div>{e.name}</div>
        </div>
      });
      return view;
    } else if (state === State.Error) {
      return <div className='text-white'>{"Error because of "+message }</div>
    }
  }

  return (
    <div>
      <div className='flex'>
        <div className='text-white'>List Item</div>
        <button onClick={() => handleReload()} className='bg-white p-2'>Reload</button>
      </div>
      <button onClick={() => setStateError("Error is happening")} className='text-gray-900 bg-white p-2'>Set Error</button>
      <div>
        {handleState()}
      </div>
    </div>
  );
}

function Home() {
  const dark = useDark();
  const setDark = useSetDark();

  const user = useGetUser();
  const setUser = useSetUser();

  const setCurrentPerson = ListItemState.useSetCurrentPerson();
  const currentPerson = ListItemState.useCurrentPerson();

  useEffect(() => {
    
    let isDark = localStorage.getItem("is_dark");
    console.log("theme "+isDark);
    console.log("user "+user);
    if (isDark === "true") {
      console.log("dark will be implemented");
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, )

  const handleClick = () => {
    setCurrentPerson(document.getElementById("input-name").value)
  }
  
  return (
    <div className='bg-gray-100 dark:bg-gray-900 h-screen'>
      <div className='container'>
        <div className='text-gray-900 dark:text-white'>
          Hello, welcome {currentPerson}
        </div>
        <div className='rounded-md bg-gray-800 drop-shadow-[0_5px_15px_rgba(100,100,100,0.25)] p-5'>
          <div className='text-white '>Login Section</div>
          <input id='input-name'></input>
          <button className='bg-gray-900 text-white' onClick={() => handleClick()}>Set User</button>
        </div>
        <Link href={"/setting/setting"}>Go to Setting</Link>
        <ListData />
      </div>
    </div>
  );
}

export default function HomeWrapper() {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <div>
          <Home />
        </div>
      </ThemeContextProvider>
    </UserContextProvider>
  )
}
