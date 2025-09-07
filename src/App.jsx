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
import Marquee from "@/components/ui/marquee"
import './App.css'

const items = ["Nothing to see here", "Nothing to see here","Nothing to see here","Nothing to see here","Nothing to see here","Nothing to see here",]

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
              <h1>Your friend from <Uknown /></h1>
              <br />
              <h1> This web site belongs to mold</h1>
            </div>

            <div>
            </div>
          </div>

        </CardContent>
      </Card>
      <Marquee items={items} />

    </>
  )
}

export default App
