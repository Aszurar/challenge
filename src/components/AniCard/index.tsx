import {
  Briefcase,
  Building2,
  CalendarRange,
  Info as InfoIcon,
  Tv,
  Users,
} from 'lucide-react'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Dialog, DialogTrigger } from '../ui/dialog'
import * as Info from './Info'

export function AniCard() {
  return (
    <Dialog>
      <DialogTrigger
        className={`group w-46.25 h-71.25 cursor-pointer 
          hover:scale-105 transition-all duration-200 rounded-lg
          border-b-4 border-background dark:hover:bg-zinc-700
          hover:border-yellow-400
          dark:hover:border-yellow-450 overflow-hidden shadow-sm`}
      >
        <Card
          className={`relative bg-[url("https://cdn.myanimelist.net/images/anime/7/76014.jpg")]`}
        >
          <div
            className={`backdrop-opacity-10 bg-black/50 flex-col h-full 
              flex-1 hidden group-hover:flex text-zinc-200 transition-all duration-500`}
          >
            <CardHeader>
              <CardTitle>#1</CardTitle>
            </CardHeader>
            <CardContent>
              <Info.Root>
                <Info.Item icon={Tv} info="TV" />
                <Info.Item icon={InfoIcon} info="PG-13" />
                <Info.Item isLink icon={Briefcase} info="Production I.G." />
                <Info.Item isLink icon={Building2} info="Crunchyroll" />
                <Info.Item icon={CalendarRange} info="09-01-24 to 24-03-24" />
              </Info.Root>
            </CardContent>
          </div>
          <CardFooter>
            <h4 className="text-xs font-bold hover:text-yellow-450">
              Haikyuu!!
            </h4>
            <div className="flex w-full justify-between">
              <span className="text-xs ">
                Score <span className="font-bold">10</span>
              </span>

              <span className="text-xs flex items-center font-bold">
                <Users className="h-3.5 w-3.5 mr-0.5" /> 1.2M
              </span>
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
    </Dialog>
  )
}
