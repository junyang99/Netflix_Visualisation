import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog"
import { useState, useEffect } from "react"

interface CarousellPopUpProps {
  contentTitle: string
  contentSecondary: string
  contentMain: string
  image: string
  year?: number
  revenue?: number
  context?: string
  isOpen: () => void
}

function CarousellPopUp({
  contentTitle,
  contentSecondary,
  contentMain,
  image,
  year,
  revenue,
  context,
  isOpen
 
}: CarousellPopUpProps) {
  const [openCarousell, setOpenCarousell] = useState(false)
  useEffect(() => {
    if (isOpen) {
      setOpenCarousell((prev) => !prev)
    }

  }, [isOpen])
  return (
    <Dialog open={openCarousell} onOpenChange={isOpen}>
      <DialogContent className="sm:max-w-[850px] max-h-[90vh] overflow-y-auto bg-zinc-900 text-white p-0">
        <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4 text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        {/* Image Section */}
        <div className="relative w-full aspect-video">
          <img
            src={image}
            alt={contentTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-6 -mt-12 relative z-10">
          <h2 className="text-2xl font-bold mb-2">{contentTitle}</h2>
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
            <span>{year}</span>
            {revenue && (
              <>
                <span>•</span>
                <span>Revenue: ${(revenue / 1000000).toFixed(1)}M</span>
              </>
            )}
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-zinc-200">Production Company</h3>
              <p className="text-zinc-400">{contentSecondary}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-zinc-200">Overview</h3>
              <p className="text-zinc-400 leading-relaxed">{context || contentMain}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button 
              onClick={isOpen}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CarousellPopUp

