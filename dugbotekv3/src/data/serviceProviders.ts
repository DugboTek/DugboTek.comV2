export interface ServiceProvider {
  id: string;
  name: string;
  imageUrl?: string;
  emoji: string;
  description: string;
  isInitiallyVisible: boolean;
  color: string;
  backgroundColor: string;
}

export const serviceProviders: ServiceProvider[] = [
  {
    id: "database",
    name: "Database Solutions",
    emoji: "🗄️",
    description: "Database management and optimization",
    isInitiallyVisible: true,
    color: "#FF7A59",
    backgroundColor: "rgba(255, 122, 89, 0.1)"
  },
  {
    id: "ai-engine",
    name: "AI Engine",
    emoji: "🤖",
    description: "AI Processing Engine",
    isInitiallyVisible: false,
    color: "#9C27B0",
    backgroundColor: "rgba(156, 39, 176, 0.1)"
  },
  {
    id: "analytics",
    name: "Analytics Platform",
    emoji: "📊",
    description: "Real-time data analytics",
    isInitiallyVisible: true,
    color: "#2196F3",
    backgroundColor: "rgba(33, 150, 243, 0.1)"
  },
  {
    id: "cloud-storage",
    name: "Cloud Storage",
    emoji: "☁️",
    description: "Secure cloud storage solutions",
    isInitiallyVisible: true,
    color: "#4CAF50",
    backgroundColor: "rgba(76, 175, 80, 0.1)"
  },
  {
    id: "messaging",
    name: "Messaging Service",
    emoji: "💬",
    description: "Real-time messaging platform",
    isInitiallyVisible: false,
    color: "#FF5722",
    backgroundColor: "rgba(255, 87, 34, 0.1)"
  },
  {
    id: "security",
    name: "Security Suite",
    emoji: "🔒",
    description: "Advanced security protocols",
    isInitiallyVisible: true,
    color: "#607D8B",
    backgroundColor: "rgba(96, 125, 139, 0.1)"
  },
  {
    id: "automation",
    name: "Workflow Automation",
    emoji: "⚡",
    description: "Business process automation",
    isInitiallyVisible: false,
    color: "#FFC107",
    backgroundColor: "rgba(255, 193, 7, 0.1)"
  },
  {
    id: "monitoring",
    name: "System Monitoring",
    emoji: "📡",
    description: "Real-time system monitoring",
    isInitiallyVisible: true,
    color: "#795548",
    backgroundColor: "rgba(121, 85, 72, 0.1)"
  },
  {
    id: "email",
    name: "Email Service",
    emoji: "📧",
    description: "Enterprise email solutions",
    isInitiallyVisible: false,
    color: "#E91E63",
    backgroundColor: "rgba(233, 30, 99, 0.1)"
  },
  {
    id: "payment",
    name: "Payment Processing",
    emoji: "💳",
    description: "Secure payment processing",
    isInitiallyVisible: true,
    color: "#009688",
    backgroundColor: "rgba(0, 150, 136, 0.1)"
  }
]; 