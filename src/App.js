import React, {useEffect, useState} from 'react';
import './style/main.scss';

import Input from './components/input';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [log, setLog] = useState([])
  const [path, setPath] = useState("user@dashxd.dev > ")

  const [welcomeText, setWelcomeText] = useState([
    <pre>
    <p>
    ______  ___   _____ _   _ __   _____________ _____ _   _<br />
    |  _  \/ _ \ /  ___| | | |\ \ / /  _  \  _  \  ___| | | |<br />
    | | | / /_\ \\ `--.| |_| | \ V /| | | | | | | |__ | | | |<br />
    | | | |  _  | `--. \  _  | /   \| | | | | | |  __|| | | |<br />
    | |/ /| | | |/\__/ / | | |/ /^\ \ |/ /| |/ /| |___\ \_/ /<br />
    |___/ \_| |_/\____/\_| |_/\/   \/___(_)___/ \____/ \___/ 
    <br />
    <br />

    </p>
    <p>Welcome to dashxd.dev. This is a concept portfolio, that is styled to look like<br />a terminal that you would find on Linux, Windows and OS X.</p>
    <br />
    <p>There are only a few commands, and you can type <span className="command">help</span> below, to get an overview of them.</p>
    </pre>
  ]);

  useEffect(() => {
    setLog([...log, welcomeText])
  }, [])

  const keyUp = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      console.log(inputValue)
      let input;
      switch (inputValue.toLowerCase()) {
        case 'clear':
          input = "";
          setLog([]);
          break;
        case 'help': 
          input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>,
                   <p><span className="command">clear</span>      Clear the screen</p>,
                   <p><span className="command">help</span>       Show this help</p>,
                   <p><span className="command">welcome</span>    Show the welcome text</p>,
                   <p><span className="command">whoami</span>     About me, the creator of the site</p>,
                   <p><span className="command">projects</span>   The projects i am working on, and have finished</p>,
                   <p><span className="command">exit</span>       Exit the terminal</p>];
          setLog([...log, input])
          break;
        case 'welcome': 
          input = welcomeText;
          setLog([...log, <p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>, welcomeText])
          break;
        case 'whoami':
          input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>,
                    <p>Hi! My name is <span className="command">Sebastian</span>. I'm a front- and backend developer.<br />
                    I use JavaScript frameworks like <span className="react">React</span>, <span className="vue">Vue</span> and <span className="electron">Electron</span> to create<br />
                    beautiful and responisve cross-platform apps and web apps, like the site you're on now.<br />
                    <br />
                    Although i mostly do front-end development, i do also have experience with <span className="backend">backend</span> development,<br />
                    mainly with <span className="vue">Node.js</span>, <span className="react">Express.js</span> and <span className="vue">MongoDB</span>.<br />
                    <br />
                    If you wan't to get in touch with me, you can contact me at <br />
                    - <a href="mailto:hello@dashxd.dev">hello@dashxd.dev</a><br />
                    - <a href="https://dashxd.dev">https://dashxd.dev</a><br />
                    - <a href="https://dashxd.dev">+45 61 30 30 77</a><br />
                    (psst.. You can click them)
                    </p>];
          setLog([...log, input])
          break;
        default:
          input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>, <p>The command "{inputValue}" is not recognised.</p>]
          setLog([...log, input]);
          break;
      }
      setInputValue('');
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 1);
    }
  };

  const focusInput = () => {
    document.getElementById('input').focus();
  }

  return (
    <div className="App" onClick={() => focusInput()}>
      <div className="log">
        {log.map((item, index) => (
          <pre key={index}>{item}</pre>
        ))}
      </div>
      <Input path={path} onChange={(event) => setInputValue(event.target.value)} onKeyDown={(e) => keyUp(e)} value={inputValue}/>
    </div>
  );
}

export default App;
