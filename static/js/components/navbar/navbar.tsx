import {
    ChartBarIcon,
    CogIcon,
    InformationCircleIcon,
  } from '@heroicons/react/outline'
  import { GAME_TITLE } from '../../constants/strings'
  
  type Props = {
    setIsInfoModalOpen: (value: boolean) => void
    setIsStatsModalOpen: (value: boolean) => void
    setIsSettingsModalOpen: (value: boolean) => void
  }
  
  export const Navbar = ({
    setIsInfoModalOpen,
    setIsStatsModalOpen,
    setIsSettingsModalOpen,
  }: Props) => {
    return (
      <div className="navbar">
        <div className="navbar-content px-5">
          <InformationCircleIcon
            className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          <p className="text-xl ml-2.5 font-bold dark:text-white">{GAME_TITLE}</p>
          <div className="right-icons">
            <ChartBarIcon
              className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
              onClick={() => setIsStatsModalOpen(true)}
            />
            <CogIcon
              className="h-6 w-6 cursor-pointer dark:stroke-white"
              onClick={() => setIsSettingsModalOpen(true)}
            />
          </div>
        </div>
        <hr></hr>
        <div id="logo_header_container">
          <a href="https://kimdennis.github.io/wordle/">
            <img id="logo_header" src="denniswordle.png" alt="Dennis Wordle Logo"width="350" height="auto"></img>
          </a>
        </div>
      </div>
  
    )
  }
  