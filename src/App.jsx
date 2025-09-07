import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaItchIo, FaGithub, FaSteam } from "react-icons/fa";
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

const items = ["Nothing to see here", "Nothing to see here", "Nothing to see here", "Nothing to see here", "Nothing to see here", "Nothing to see here",]

function App() {

  return (
    <>
      <Card className="m-5">
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
              <h1 className="flex justify-center gap-5 m-1">
                <span>
                  <a href="https://github.com/Iviv122" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </span>
                <span>
                  <a href="https://steamcommunity.com/profiles/76561198980803169/" target="_blank" rel="noopener noreferrer">
                    <FaSteam />
                  </a>
                </span>
                <span>
                  <a href="https://itch.io/profile/iviv122" target="_blank" rel="noopener noreferrer">
                    <FaItchIo />
                  </a>
                </span>
              </h1>
            </div>

            <div>
            </div>
          </div>

        </CardContent>
      </Card >

      <Marquee items={items} />

      <div className="flex m-5 justify-center">

        <Accordion type="single" collapsible className="w-full max-w-xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>Who am I?</AccordionTrigger>
            <AccordionContent>
              Something similar to human.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>When I can contact you?</AccordionTrigger>
            <AccordionContent>
              Whenever you want
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What are your skills?</AccordionTrigger>
            <AccordionContent>
              Maybe reading but rather nothing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>

    </>
  )
}

export default App
