function PageNotFound() {
     return (
          <div className="flex items-center justify-center gap-2 h-screen w-screen text-white">
               <h2>Invalid URL</h2>
               <span>|</span>
               <p>The page you are requesting could not be found.🤷🏻‍♂️</p>
          </div>
     )
}

export default PageNotFound