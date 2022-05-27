import React from 'react';

export default class DrawerNavbar extends React.Component {

  render() {
    const routes = this.props.routes;
    const routeButtons = routes.map((e, i) => {
      return (
        <li key={e.label}>
          <a href={e.route} >{e.label}</a>
        </li>
      );
    });

    return (
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="max-w-4xl w-full mx-auto">
              <a href="#" className="btn btn-ghost px-2 mr-auto normal-case font-black text-3xl">React & DaisyUI</a>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                  {routeButtons}
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Page content here --> */}
          {this.props.children}

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">

            {/* <!-- Sidebar content here --> */}
            {routeButtons}

          </ul>
        </div>
      </div>
    );
  }
}
