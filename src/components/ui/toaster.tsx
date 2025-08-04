import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useEffect, useState } from "react"

const ToastProgressBar = ({ duration = 5000 }: { duration?: number }) => {
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev - (100 / (duration / 100))
        return newProgress <= 0 ? 0 : newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [duration])

  return (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/20 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="relative overflow-hidden">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
            <ToastProgressBar duration={5000} />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}