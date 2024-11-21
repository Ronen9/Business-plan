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
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                <p className="mb-4">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">BlueHook היא אפליקציה פורצת דרך</span> שמציעה פתרון היברידי לחיבורים חברתיים בעידן הדיגיטלי. בעולם שבו המסכים השתלטו על חיינו ואנחנו נרתעים ממפגשים פיזיים, BlueHook ממנפת את היתרונות של הטכנולוגיה כדי לעודד היכרות אנושית אמיתית, בזמן אמת ובמקום שבו אתם נמצאים.
                </p>

                <p className="mb-4">
                  באמצעות <span className="font-semibold text-blue-600 dark:text-blue-400">טכנולוגיית בלוטות' חכמה</span>, BlueHook מזהה אנשים קרובים בעלי תחומי עניין משותפים – <span className="font-semibold text-blue-600 dark:text-blue-400">גם ללא חיבור ל-WiFi או רשת סלולרית</span>. החיבור מתבצע ישירות בין המכשירים, ומספק פתרון ייחודי במקומות ללא גישה לאינטרנט או לרשת סלולרית.
                </p>

                <p className="mb-4">
                  מה שמייחד את BlueHook הוא <span className="font-semibold text-blue-600 dark:text-blue-400">המענה לצורך בשבירת הקרח</span>. במקום לפנות ישירות ולהרגיש מבוכה, האפליקציה מאפשרת ליצור קשר ראשוני דיגיטלי, ידידותי ולא מאיים – בין אם זה שליחת הודעה קצרה, אימוג'י, או אפילו הזמנה לדרינק. זהו גשר דיגיטלי שמחבר בין העולם הווירטואלי לפיזי, ועוזר לכם להרגיש בטוחים ונינוחים במפגש האמיתי.
                </p>

                <p className="mb-4">
                  לדוגמה: אתם במסיבה, בתערוכה, אירוע עסקי או בבית קפה ורואים מישהו שנראה מעניין. BlueHook עוזרת לכם לזהות אנשים קרובים, לקבל תמונה ופרטים בסיסיים (לפי בחירת המשתמש), ואפילו להתאים לכם אנשים פוטנציאליים על בסיס תחומי עניין או העדפות שהגדרתם. <span className="font-semibold text-blue-600 dark:text-blue-400">סוכן ה-AI של האפליקציה עושה את העבודה עבורכם</span>, ומציע התאמות חכמות שמקלות על תחילת ההיכרות.
                </p>

                <p>
                  בין אם אתם מחפשים חברים חדשים, מרחיבים קשרים מקצועיים או אפילו הכרות רומנטית, <span className="font-semibold text-blue-600 dark:text-blue-400">BlueHook היא הרבה יותר מסתם אפליקציה – היא הכלי שמחזיר את האנושיות לעידן הדיגיטלי</span>.
                </p>
              </div>
            </Card>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">איך זה עובד?</h2>
              
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">מערכת חכמה בזמן אמת</h3>
                  <p className="leading-relaxed">
                    האפליקציה פועלת כמערכת מתקדמת שמחברת בין אנשים בצורה חכמה ויעילה בזמן אמת. באמצעות <span className="font-semibold text-blue-600 dark:text-blue-400">טכנולוגיית בלוטות' מתקדמת</span>, המכשיר שלכם מציג מכשירים סמוכים, מזהה משתמשים שמתאימים להגדרות שלכם, ומאפשר תקשורת ראשונית קלה ונוחה. BlueHook אינה רק כלי ליצירת קשרים – היא <span className="font-semibold text-blue-600 dark:text-blue-400">פלטפורמה שמעצימה גם את המשתמשים וגם את בתי העסק</span>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">עולם רומנטי</h3>
                  <p className="leading-relaxed">
                    אתם יושבים בבית קפה, ורואים סביבכם אנשים שנראים מעניינים. האפליקציה תזהה <span className="font-semibold text-blue-600 dark:text-blue-400">באופן אוטומטי אנשים עם תחומי עניין דומים</span> (למשל, אהבה לספרים או לטיולים) ותציע לכם לשלוח הודעה או אימוג'י להתחלה קלילה. אם שני הצדדים מתעניינים, תוכלו לקבוע מפגש פנים מול פנים באותו הרגע, <span className="font-semibold text-blue-600 dark:text-blue-400">מבלי לחוש מבוכה או חשש מדחייה</span>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">עולם מקצועי</h3>
                  <p className="leading-relaxed">
                    במהלך כנס מקצועי, האפליקציה עוזרת לזהות אנשי מקצוע בתחום שלכם, ואפילו <span className="font-semibold text-blue-600 dark:text-blue-400">מציעה התאמות מבוססות על המטרות העסקיות שלכם</span>. לדוגמה, אם אתם מחפשים שותף טכנולוגי, האפליקציה יכולה להדגיש אנשים שמתמחים בתחום זה. תוכלו לשלוח הודעה, לקבוע פגישה, ואפילו לתזמן את הפגישה במהלך האירוע – והכול באופן דיגיטלי פשוט וידידותי.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">הזדמנויות עסקיות</h3>
                  <p className="leading-relaxed mb-4">
                    עבור בתי העסק, BlueHook היא <span className="font-semibold text-blue-600 dark:text-blue-400">כלי שיווקי מהפכני</span>. בעלי ברים, מועדונים, או פסטיבלים יכולים להשתמש באפליקציה כדי להציע קופונים, מבצעים ייחודיים, או לשדרג את חוויית המשתמשים. לדוגמה:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>פאב יכול להציע "משקה ראשון חינם" דרך האפליקציה, לאנשים שפותחים חיבור חדש.</li>
                    <li>מועדון יכול לעודד אנשים לשתף פעולה במשחק חברתי באמצעות האפליקציה, שיזכה בפרסים כמו כרטיסים למופעים.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">הערך המשולב</h3>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">משתמש הקצה נהנה ממפגש קליל</span>, פחות מאיים, ומהתאמות חכמות למטרותיו – רומנטיות, מקצועיות או חברתיות. בתי העסק, מנגד, זוכים לאינטראקציות מוגברות, העלאת המודעות למותג, והגדלת הרווחים בזכות החוויות האישיות שהאפליקציה יוצרת במקום.
                  </p>
                  <p className="leading-relaxed mt-4">
                    עם BlueHook, <span className="font-semibold text-blue-600 dark:text-blue-400">כולם מנצחים</span>: המשתמשים מתחברים בצורה אותנטית, ובתי העסק נהנים מתנועה מוגברת ומעורבות לקוחות יצירתית.
                  </p>
                </div>
              </div>
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