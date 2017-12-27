function magistrala()
{
	$("#text").fadeOut(0);
	$("#text").fadeIn(1000);
	
    document.getElementById("text").innerHTML = '<div id="texttop">Topologia magistrali</div> <br /><img src="img/magistrali.png"/> <br /><p>Topologia magistrali (topologia szynowa, ang. bus) - jedna z topologii fizycznych sieci komputerowych charakteryzująca się tym, że wszystkie elementy sieci są podłączone do jednej magistrali (zazwyczaj w postaci kabla koncentrycznego). W tej topologii pracują na przykład sieci 10Base-2 czy NMEA 2000.</p></div>';
}

function pierscien()
{
	$("#text").fadeOut(0);
	$("#text").fadeIn(800);
	
    document.getElementById("text").innerHTML = '<div id="texttop">Topologia pierścienia</div> <br /><img src="img/pierscien.png" width="466"/> <br /><p>Topologia pierścienia – jedna z fizycznych topologii sieci komputerowych. Komputery połączone są za pomocą jednego nośnika informacji w układzie zamkniętym - okablowanie nie ma żadnych zakończeń (tworzy krąg). W ramach jednego pierścienia można stosować różnego rodzaju łącza.</p></div>';
}

function gwiazda()
{
	$("#text").fadeOut(0);
	$("#text").fadeIn(800);
	
    document.getElementById("text").innerHTML = '<div id="texttop">Topologia gwiazdy</div> <br /><img src="img/gwiazda.png" width="466"/> <br /><p>Topologia gwiazdy (ang. star network) – sposób połączenia komputerów w sieci komputerowej, charakteryzujący się tym, że kable sieciowe połączone są w jednym wspólnym punkcie, zwanym punktem dostępu (ang. access point), w którym znajduje się koncentrator lub przełącznik. Sieć o topologii gwiazdy zawiera przełącznik (switch) i koncentrator (hub) łączący do niego pozostałe elementy sieci. Większość zasobów znajduje się na serwerze, którego zadaniem jest przetwarzać dane i zarządzać siecią. Pozostałe elementy tej sieci nazywamy terminalami – korzystają one z zasobów zgromadzonych na serwerze. Same zazwyczaj mają małe możliwości obliczeniowe. Zadaniem huba jest nie tylko łączyć elementy sieci, ale także rozsyłać sygnały oraz wykrywać kolizje w sieci.</p></div>'
}

function drzewo()
{
	$("#text").fadeOut(0);
	$("#text").fadeIn(800);
	
    document.getElementById("text").innerHTML = '<div id="texttop">Topologia drzewa</div> <br /><img src="img/drzewo.png" width="466"/> <br /><p>Topologia Drzewa (rozgałęzionej gwiazdy) oparta jest na topologii gwiazdy. W tej topologii każde z urządzeń końcowych działa jako urządzenie centralne dla własnej topologii gwiazdy. Pojedyncze gwiazdy połączone są przy użyciu koncentratorów lub przełączników. Jest to topologia o charakterze hierarchicznym i może być konfigurowana w taki sposób, aby ruch pozostawał lokalny. Topologia ta stosowana jest głównie w przypadku rozbudowanych sieci lokalnych, gdy obszar, który ma być pokryty siecią, jest większy niż pozwala na to topologia gwiazdy, np. w przypadku dużych instytucji.</p></div>';
}

function siatka()
{
	$("#text").fadeOut(0);
	$("#text").fadeIn(800);
	
    document.getElementById("text").innerHTML = '<div id="texttop">Topologia siatki</div> <br /><img src="img/siatka.png" width="466"/> <br /><p>Topologia siatki – jedna z fizycznych topologii sieci komputerowych. Istnieją dwa typy topologii siatki: pełna siatka (ang. full mesh) – każdy węzeł sieci ma fizyczne połączenie z każdym innym węzłem w danej sieci częściowa siatka (ang. partial mesh) – węzły mają różną liczbę połączeń sieciowych do innych węzłów. Topologia ta jest używana wtedy, gdy niezbędne jest zapewnienie wysokiej przepustowości, wysokiego bezpieczeństwa oraz wyeliminowanie kolizji sieciowych. Im bardziej te cechy są pożądane, tym sieć posiada więcej połączeń pomiędzy węzłami.</p></div>';
}