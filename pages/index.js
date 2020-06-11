import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import '../static/styles.less';

const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args);
  }
}

events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})

export default function Home() {

  function gotoTestB () {
    Router.push({
      pathname:'/test/b',
      query: {
        id: 'anke1'
      }
    }, '/test/b')
  }

  return (
    <div className="app">
      <Link href="/a?name=anke" as="/a/anke">
        <div>
          <button>link</button>
          <button>link2</button>
        </div>
      </Link>
      <button onClick={gotoTestB}>路由跳转</button>
    </div>
  );
}
