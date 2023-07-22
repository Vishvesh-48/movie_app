import { useSearchParams } from "react-router-dom"
import { Card } from "../componets"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"


export const Search = ({apiPath}) => {

  const [searchParam] = useSearchParams()
  const queryTerm = searchParam.get("q")
  const {data:movies} = useFetch(apiPath,queryTerm)

 useTitle(`Search for ${queryTerm}`)
  

  return (
    <main>

      <section className="py-7">
         <p className="text-2xl text-gray-700 dark:text-white">{movies.length === 0 ?`Not Found Search ${queryTerm}`:`Result Get Found : ${queryTerm}`}</p> 
      </section>
      
      <section className="max-w-4xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">

          {movies.map((movie)=>(
              <Card key={movie.id} movie={movie}/>
          ))}
          
        </div>
      </section>
    </main>
  )
}
