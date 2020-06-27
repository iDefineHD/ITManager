import React from 'react'

 const AppSearchbar = () => {
    return (
        <nav style={{margin: "bottom"}} className="blue">
            <div className="nav-wrapper">
            <form>
                <div className="input-field">
                    <input id="search" type="search" />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </form>
            </div>
        </nav>
    )
}

export default AppSearchbar;