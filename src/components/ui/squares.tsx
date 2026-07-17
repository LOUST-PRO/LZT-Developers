'use client';

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal"
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
}

export function Squares({
  direction = "diagonal",
  speed = 0.5,
  borderColor = "#ffffff10",
  squareSize = 40,
  hoverFillColor = "#a855f720",
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>(0)
  const numSquaresX = useRef<number>(0)
  const numSquaresY = useRef<number>(0)
  const gridOffset = useRef({ x: 0, y: 0 })
  const hoveredSquare = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.style.background = "transparent"

    // Pause control: tab hidden + IntersectionObserver
    let isTabVisible = !document.hidden
    let isInViewport = true

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      const hs = hoveredSquare.current

      ctx.lineWidth = 0.5

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize)
          const squareY = y - (gridOffset.current.y % squareSize)

          if (
            hs &&
            Math.floor((x - startX) / squareSize) === hs.x &&
            Math.floor((y - startY) / squareSize) === hs.y
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(squareX, squareY, squareSize, squareSize)
          }

          ctx.strokeStyle = borderColor
          ctx.strokeRect(squareX, squareY, squareSize, squareSize)
        }
      }
    }

    function startLoop() {
      if (requestRef.current) return
      requestRef.current = requestAnimationFrame(updateAnimation)
    }

    function stopLoop() {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
        requestRef.current = 0
      }
    }

    const updateAnimation = () => {
      requestRef.current = 0

      // Skip frame if tab hidden or out of viewport
      if (!isTabVisible || !isInViewport) return

      const effectiveSpeed = Math.max(speed, 0.1)

      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          break
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize
          break
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize
          break
        case "down":
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
        case "diagonal":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
      }

      drawGrid()
      requestRef.current = requestAnimationFrame(updateAnimation)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      hoveredSquare.current = {
        x: Math.floor((mouseX + gridOffset.current.x - startX) / squareSize),
        y: Math.floor((mouseY + gridOffset.current.y - startY) / squareSize),
      }
    }

    const handleMouseLeave = () => {
      hoveredSquare.current = null
    }

    // Page Visibility API — pause when tab is hidden
    const onVisibilityChange = () => {
      isTabVisible = !document.hidden
      if (isTabVisible && isInViewport) startLoop()
      else stopLoop()
    }
    document.addEventListener("visibilitychange", onVisibilityChange)

    // IntersectionObserver — pause when scrolled away
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewport = entry.isIntersecting
        if (isInViewport && isTabVisible) startLoop()
        else stopLoop()
      },
      { threshold: 0.01, rootMargin: '100px 0px' },
    )
    observer.observe(canvas)

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    resizeCanvas()
    startLoop()

    return () => {
      stopLoop()
      observer.disconnect()
      document.removeEventListener("visibilitychange", onVisibilityChange)
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [direction, speed, borderColor, hoverFillColor, squareSize])

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full border-none block", className)}
    />
  )
}
