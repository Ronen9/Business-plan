import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { 
  BluetoothIcon, Users, Building, GraduationCap, PieChart, 
  Rocket, DollarSign, Target, LineChart, TrendingUp
} from 'lucide-react';
import { MarketCard } from '@/components/MarketCard';
import { StatCard } from '@/components/StatCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="py-12 px-4 text-center bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BluetoothIcon className="w-12 h-12" />
            <h1 className="text-5xl font-bold">BlueHook</h1>
          </div>
          <p className="text-xl text-blue-100">פלטפורמת חיבורים חברתיים מבוססת מיקום בזמן אמת</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <ScrollArea className="h-[calc(100vh-240px)]">
          {/* Executive Summary */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">תקציר מנהלים</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                BlueHook מביאה מהפכה לעולם החיבורים החברתיים באמצעות טכנולוגית Bluetooth, המחברת בין אנשים הנמצאים פיזית באותו מקום. בניגוד לאפליקציות חברתיות מסורתיות, BlueHook מאפשרת חיבורים אותנטיים ומיידיים בין אנשים שנמצאים באותו מתחם, יוצרת הזדמנויות לקשרים אמיתיים ומשמעותיים - בין אם מדובר בדייטים, נטוורקינג מקצועי, או חברויות חדשות.
              </p>
            </Card>
          </section>

          {/* Markets */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">תחומי פעילות ושווקי יעד</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MarketCard
                icon={<Users className="w-6 h-6" />}
                title="חיי לילה ובילוי"
                items={['ברים ומועדונים', 'מסעדות יוקרה', 'אירועי תרבות', 'פסטיבלים ומופעים']}
              />
              <MarketCard
                icon={<Building className="w-6 h-6" />}
                title="נטוורקינג מקצועי"
                items={['כנסי הייטק', 'תערוכות מקצועיות', 'מתחמי עבודה משותפים', 'אירועים עסקיים']}
              />
              <MarketCard
                icon={<GraduationCap className="w-6 h-6" />}
                title="חינוך וקמפוסים"
                items={['אוניברסיטאות', 'מכללות', 'מתחמי סטודנטים', 'אירועי קמפוס']}
              />
              <MarketCard
                icon={<PieChart className="w-6 h-6" />}
                title="אירועי תרבות ופנאי"
                items={['מוזיאונים', 'גלריות', 'תערוכות אמנות', 'אירועי ספורט']}
              />
            </div>
          </section>

          {/* Market Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">נתוני שוק</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatCard
                icon={<DollarSign className="w-6 h-6" />}
                title="שוק האפליקציות החברתיות העולמי"
                value="15.3B$"
              />
              <StatCard
                icon={<TrendingUp className="w-6 h-6" />}
                title="צפי צמיחה שנתי עד 2028"
                value="11.5%"
              />
              <StatCard
                icon={<Users className="w-6 h-6" />}
                title="משתמשים פעילים בעולם"
                value="323.9M"
              />
              <StatCard
                icon={<Target className="w-6 h-6" />}
                title="צעירים המחפשים קשרים חדשים"
                value="78%"
              />
            </div>
          </section>

          {/* Investment Rationale */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">למה להשקיע עכשיו?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <LineChart className="w-6 h-6 text-blue-600" />
                  פוטנציאל שוק עצום
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>שוק בשווי מיליארדי דולרים ללא מענה טכנולוגי מספק</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>ביקוש גובר לחיבורים אותנטיים בעידן הדיגיטלי</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-blue-600" />
                  יתרונות טכנולוגיים
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>טכנולוגיה חדשנית בתהליך רישום פטנט</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>פתרון ייחודי לאתגרי פרטיות וביטחון</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Financial Projections */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">תחזיות פיננסיות</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">שנה ראשונה</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>משתמשים:</span>
                    <span className="font-bold">250,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>הכנסות:</span>
                    <span className="font-bold">2.1M$</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>שותפים עסקיים:</span>
                    <span className="font-bold">500</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">שנה שלישית</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>משתמשים:</span>
                    <span className="font-bold">2.5M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>הכנסות:</span>
                    <span className="font-bold">18M$</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>שותפים עסקיים:</span>
                    <span className="font-bold">5,000</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Investment Requirements */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">דרישות השקעה</h2>
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">סבב Seed: 1.5M$</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">התפלגות ההשקעה:</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>פיתוח:</span>
                    <span className="font-bold">40%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>שיווק:</span>
                    <span className="font-bold">30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>תפעול:</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>רזרבה:</span>
                    <span className="font-bold">10%</span>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Exit Strategy */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">אסטרטגיית יציאה</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold mb-2">IPO פוטנציאלי תוך 5 שנים</p>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2">אטרקטיביות לרכישה על ידי:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>חברות טכנולוגיה מובילות</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>פלטפורמות חברתיות גדולות</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>תאגידי בידור ופנאי</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>רשתות נטוורקינג מקצועיות</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>
        </ScrollArea>
      </main>
    </div>
  );
}

export default App;