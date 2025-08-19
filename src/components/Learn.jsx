import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { ChevronDown, ArrowLeft, BookOpen, Leaf, Heart, Brain, Sun, Moon, Wind } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Utility function
function cn(...inputs) {
  const clsx = (...args) => args.filter(Boolean).join(' ');
  return clsx(...inputs);
}

// Button Component
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

// Card Components
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

// Badge Component
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

// Tabs Components
const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-gray-200",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// Accordion Components
const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

const Learn = () => {
  const navigate = useNavigate();

  const doshaDetails = {
    vata: {
      name: 'Vata',
      elements: 'Air & Space',
      qualities: 'Light, Dry, Cold, Rough, Subtle, Mobile',
      characteristics: ['Creative and imaginative', 'Quick thinking', 'Energetic when balanced', 'Light sleeper', 'Variable appetite'],
      imbalance: ['Anxiety and worry', 'Insomnia', 'Dry skin', 'Constipation', 'Joint pain'],
      balancing: ['Warm, cooked foods', 'Regular routine', 'Oil massage', 'Meditation', 'Adequate rest'],
      color: 'from-blue-400 to-cyan-600',
      icon: Wind
    },
    pitta: {
      name: 'Pitta',
      elements: 'Fire & Water',
      qualities: 'Hot, Sharp, Light, Liquid, Spreading, Oily',
      characteristics: ['Strong digestion', 'Natural leader', 'Focused and determined', 'Medium build', 'Good appetite'],
      imbalance: ['Anger and irritability', 'Skin rashes', 'Heartburn', 'Excessive heat', 'Impatience'],
      balancing: ['Cool, sweet foods', 'Avoid spicy foods', 'Cool environments', 'Moderation', 'Calming activities'],
      color: 'from-orange-400 to-red-500',
      icon: Sun
    },
    kapha: {
      name: 'Kapha',
      elements: 'Earth & Water',
      qualities: 'Heavy, Slow, Cold, Oily, Smooth, Dense',
      characteristics: ['Calm and stable', 'Strong immunity', 'Loyal and compassionate', 'Slow digestion', 'Deep sleep'],
      imbalance: ['Weight gain', 'Lethargy', 'Depression', 'Congestion', 'Attachment'],
      balancing: ['Light, spicy foods', 'Regular exercise', 'Stimulating activities', 'Warm environments', 'Variety in routine'],
      color: 'from-green-400 to-emerald-600',
      icon: Moon
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="introduction" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="introduction">Introduction</TabsTrigger>
            <TabsTrigger value="doshas">The Doshas</TabsTrigger>
            <TabsTrigger value="principles">Principles</TabsTrigger>
            <TabsTrigger value="practices">Practices</TabsTrigger>
          </TabsList>

          {/* Introduction Tab */}
          <TabsContent value="introduction" className="space-y-8">
            <Card className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Leaf className="h-16 w-16" />
                </div>
                <CardTitle className="text-3xl mb-2">What is Ayurveda?</CardTitle>
                <CardDescription className="text-orange-100 text-lg">
                  The Science of Life and Longevity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-center">
                  Ayurveda is a 5,000-year-old system of natural healing that originated in India.
                  The word "Ayurveda" comes from Sanskrit: "Ayur" (life) and "Veda" (knowledge or science).
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    Philosophy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sage-700">
                    <li>• Mind, body, and spirit are interconnected</li>
                    <li>• Prevention is better than cure</li>
                    <li>• Each person is unique</li>
                    <li>• Natural healing is most effective</li>
                    <li>• Balance leads to health</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sage-700">
                    <li>• Improved digestion and metabolism</li>
                    <li>• Better sleep and energy levels</li>
                    <li>• Reduced stress and anxiety</li>
                    <li>• Enhanced immunity</li>
                    <li>• Greater mental clarity</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>The Five Elements (Panchamahabhutas)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl">🌍</div>
                    <div className="font-semibold text-green-700">Earth</div>
                    <div className="text-sm text-sage-600">Stability, Structure</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl">💧</div>
                    <div className="font-semibold text-blue-700">Water</div>
                    <div className="text-sm text-sage-600">Flow, Cohesion</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl">🔥</div>
                    <div className="font-semibold text-red-700">Fire</div>
                    <div className="text-sm text-sage-600">Transformation</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl">💨</div>
                    <div className="font-semibold text-cyan-700">Air</div>
                    <div className="text-sm text-sage-600">Movement</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl">✨</div>
                    <div className="font-semibold text-purple-700">Space</div>
                    <div className="text-sm text-sage-600">Consciousness</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Doshas Tab */}
          <TabsContent value="doshas" className="space-y-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">The Three Doshas</CardTitle>
                <CardDescription>
                  Your unique mind-body constitution based on the five elements
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-6">
              {Object.entries(doshaDetails).map(([key, dosha]) => {
                const IconComponent = dosha.icon;
                return (
                  <Card key={key} className={`bg-gradient-to-r ${dosha.color} text-white dosha-card transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <IconComponent className="h-12 w-12" />
                        <div>
                          <CardTitle className="text-2xl">{dosha.name}</CardTitle>
                          <CardDescription className="text-white/90 text-lg">
                            {dosha.elements}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Qualities:</h4>
                          <p className="text-white/90 mb-4">{dosha.qualities}</p>

                          <h4 className="font-semibold mb-2">When Balanced:</h4>
                          <ul className="space-y-1 text-white/90">
                            {dosha.characteristics.map((char, idx) => (
                              <li key={idx}>• {char}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">When Imbalanced:</h4>
                          <ul className="space-y-1 text-white/90 mb-4">
                            {dosha.imbalance.map((imb, idx) => (
                              <li key={idx}>• {imb}</li>
                            ))}
                          </ul>

                          <h4 className="font-semibold mb-2">Balancing Tips:</h4>
                          <ul className="space-y-1 text-white/90">
                            {dosha.balancing.map((tip, idx) => (
                              <li key={idx}>• {tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Principles Tab */}
          <TabsContent value="principles" className="space-y-8">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="digestion">
                <AccordionTrigger className="text-lg font-semibold">
                  Agni - The Digestive Fire
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-sage-700">
                    Agni is considered the cornerstone of health in Ayurveda. It's responsible for
                    digestion, absorption, and transformation of food into energy and nutrients.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Strong Agni Signs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-sage-700">
                          <li>• Regular appetite</li>
                          <li>• Good digestion</li>
                          <li>• Clear complexion</li>
                          <li>• High energy levels</li>
                          <li>• Regular elimination</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Weak Agni Signs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1 text-sage-700">
                          <li>• Poor appetite</li>
                          <li>• Indigestion</li>
                          <li>• Fatigue after meals</li>
                          <li>• Gas and bloating</li>
                          <li>• Irregular bowel movements</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ama">
                <AccordionTrigger className="text-lg font-semibold">
                  Ama - Toxins and Waste
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sage-700 mb-4">
                    Ama represents undigested food particles and metabolic waste that accumulate
                    in the body when digestion is weak, leading to various health issues.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Signs of Ama:</h4>
                    <ul className="space-y-1 text-sage-700">
                      <li>• Thick coating on tongue</li>
                      <li>• Bad breath</li>
                      <li>• Feeling heavy or sluggish</li>
                      <li>• Joint stiffness</li>
                      <li>• Mental fog</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ojas">
                <AccordionTrigger className="text-lg font-semibold">
                  Ojas - Vital Essence
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sage-700 mb-4">
                    Ojas is the subtle essence of all vital fluids, representing immunity,
                    strength, and the body's natural healing capacity.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Building Ojas:</h4>
                    <ul className="space-y-1 text-sage-700">
                      <li>• Consume fresh, organic foods</li>
                      <li>• Practice meditation and yoga</li>
                      <li>• Get adequate sleep</li>
                      <li>• Maintain positive relationships</li>
                      <li>• Avoid stress and overexertion</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="circadian">
                <AccordionTrigger className="text-lg font-semibold">
                  Dinacharya - Daily Routine
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sage-700 mb-4">
                    Ayurveda emphasizes the importance of aligning daily activities with natural
                    rhythms to maintain balance and health.
                  </p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <Badge variant="outline" className="p-4 flex-col">
                        <div className="font-semibold">6 AM - 10 AM</div>
                        <div className="text-sm">Kapha Time</div>
                        <div className="text-xs">Slow, steady energy</div>
                      </Badge>
                      <Badge variant="outline" className="p-4 flex-col">
                        <div className="font-semibold">10 AM - 2 PM</div>
                        <div className="text-sm">Pitta Time</div>
                        <div className="text-xs">Peak digestion</div>
                      </Badge>
                      <Badge variant="outline" className="p-4 flex-col">
                        <div className="font-semibold">2 PM - 6 PM</div>
                        <div className="text-sm">Vata Time</div>
                        <div className="text-xs">Mental activity</div>
                      </Badge>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          {/* Practices Tab */}
          <TabsContent value="practices" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dietary Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Six Tastes (Rasas):</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Sweet (Madhura)</span>
                      <Badge variant="outline">Earth + Water</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Sour (Amla)</span>
                      <Badge variant="outline">Earth + Fire</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Salty (Lavana)</span>
                      <Badge variant="outline">Water + Fire</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Pungent (Katu)</span>
                      <Badge variant="outline">Fire + Air</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Bitter (Tikta)</span>
                      <Badge variant="outline">Air + Space</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Astringent (Kashaya)</span>
                      <Badge variant="outline">Air + Earth</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-sage-600">
                    A balanced meal should include all six tastes for optimal nutrition and satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lifestyle Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sage-700">
                    <li>
                      <strong>Oil Pulling (Gandusha):</strong> Swish oil in mouth for 10-15 minutes
                    </li>
                    <li>
                      <strong>Abhyanga:</strong> Daily self-massage with warm oil
                    </li>
                    <li>
                      <strong>Pranayama:</strong> Breathing exercises for energy and calm
                    </li>
                    <li>
                      <strong>Meditation:</strong> Daily practice for mental clarity
                    </li>
                    <li>
                      <strong>Yoga:</strong> Physical postures for flexibility and strength
                    </li>
                    <li>
                      <strong>Early Rising:</strong> Wake up before sunrise
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Seasonal Living (Ritucharya)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-700">Spring (Kapha Season)</h4>
                    <ul className="text-sm space-y-1 text-sage-700">
                      <li>• Light, warm foods</li>
                      <li>• Detoxification practices</li>
                      <li>• Increased physical activity</li>
                      <li>• Avoid heavy, oily foods</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-700">Summer (Pitta Season)</h4>
                    <ul className="text-sm space-y-1 text-sage-700">
                      <li>• Cool, sweet foods</li>
                      <li>• Avoid spicy foods</li>
                      <li>• Stay hydrated</li>
                      <li>• Moderate exercise</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cyan-700">Fall/Winter (Vata Season)</h4>
                    <ul className="text-sm space-y-1 text-sage-700">
                      <li>• Warm, nourishing foods</li>
                      <li>• Regular routine</li>
                      <li>• Oil massage</li>
                      <li>• Adequate rest</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Learn;