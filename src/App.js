import React, {useEffect, useState} from 'react';
import './style/main.scss';

import Input from './components/input';

const initialPath = "user@dashxd.dev > "

const projects = [
  {id: 1, image: require('./assets/powerhour.png'),  name: "Better Power Hour", tags: 'React / SCSS', description: "A clone of drinkvirtually's power hour app, with added features like custom tasks.", link: "https://powerhour.justdiv.studio"},
  {id: 2, image: require('./assets/huedle.png'),  name: "Huedle", tags: 'React / SCSS', description: "A clone of Wordle, called Huedle, which i cloned again for a school project. This time also for non hex color nerds!", link: "https://hue.justdiv.studio"},
  {id: 3, image: require('./assets/metacrash.png'),  name: "Metacrash", tags: 'React / SCSS / Express / MongoDB', description: "An online crypto based gambling website based on the Crash game. Just a prototype, but fully working, just without actual cryptocurrency.", link: "https://justdiv.studio"},
]

function App() {
  const [inputValue, setInputValue] = useState('');
  const [log, setLog] = useState([])
  const [path, setPath] = useState(initialPath)
  const [confirming, ssetConfirming] = useState(false);

  const [welcomeText, setWelcomeText] = useState([
    <>
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
    <p>Currently my main portfolio, while i work on something more user friendly.</p><br />
    <p>The mobile experience leaves much to be desired,<br />
    but will surely be worked on in the future.</p>
    <br />
    <p>There are only a few commands, and you can type <span className="command">help</span> below, to get an overview of them.</p>
    </>
  ]);

  useEffect(() => {
    setLog([...log, welcomeText])
  }, [])

  const confirm = () => {
    setPath("Are you sure? (y/n)");
    ssetConfirming(true);
  }

  const keyUp = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      console.log(inputValue)
      let input;
      if (!confirming) {
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
                    <p><span className="command">Blog</span>       My <span className="bold">very</span> interesting blog</p>,
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
          case 'projects':
            input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>];

            // projectsCommand();
            let input2 = [];
            for (let i = 0; i < projects.length; i++) {
              if (inputValue.includes(projects[i].id)) {
                document.location.href = projects[i].link;
              }

              input2.push([
                <div className="projects" key={projects[i].id}>
                  <div className="project">
                    <img src={projects[i].image} className={"project-image "} style={{background: projects[i].image, width: "10rem", height: "10rem"}}></img>
                    <p className="project-title"><span className="command">{projects[i].name}</span></p>
                    <p className="project-tags">{projects[i].tags}</p>
                    <p className="project-description">{projects[i].description}</p>
                    <p className="project-link"><a href={projects[i].link}>Visit site</a></p>
                  </div>
                </div>
              ])
            }
            setLog([...log, input, input2]);
            break;
          case 'blog':
            input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>,
                    <p>This will take you to <a href="https://blog.dashxd.dev">https://blog.dashxd.dev</a></p>,];
            setLog([...log, input])
            confirm();
            break;
          case 'exit':
            input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>,
                    <p>Please don't ): At least check out <span className="command">projects</span> first</p>,];
            setLog([...log, input])
            break;
          case 'sudo':
            input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>,
                    <p><span className="backend">Sorry, but i can't allow you to do that. You don't know the password (:</span></p>,];
            setLog([...log, input])
            break;
          default:
            input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>, <p>The command "{inputValue}" is not recognised.</p>]
            setLog([...log, input]);
            break;
        }
      } else {
        switch (inputValue.toLowerCase()) {
          case 'y':
            input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>,
                    <p>You have been redirected to <a href="https://blog.dashxd.dev">https://blog.dashxd.dev</a></p>,];
                    document.location.href = "https://blog.dashxd.dev";
            setLog([...log, input])
            break;
          case 'n':
            input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>,
                    <p>Ok, I won't redirect you.</p>,];
            ssetConfirming(false);
            setPath(initialPath)
            setLog([...log, input])
            break;
          default:
            input = [<p className="logPath path">{path}<span className='notPath'>{inputValue}</span></p>, <p>The command "{inputValue}" is not recognised.</p>]
            setLog([...log, input]);
            break;
        }
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
          <p key={index}>{item}</p>
        ))}
      </div>
      <Input path={path} onChange={(event) => setInputValue(event.target.value)} onKeyDown={(e) => keyUp(e)} value={inputValue}/>
    </div>
  );
}

export default App;
