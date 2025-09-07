import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "@/components/ui/image"
import Uknown from "@/components/ui/uknown" 
import './App.css'

function App() {

  return (
    <>
      <Card>
        <CardContent>
          <div className='flex justify-between w-full'>
            <Image
              imageUrl="./icon.jpg"
            >
            </Image>
            
            <div>
              <h1>Hi There!</h1>
              <h1>Your friend Ivan from <Uknown/></h1>
            </div>
            
            <div>
            </div>
          </div>

        </CardContent>
      </Card>
    </>
  )
}

export default App
