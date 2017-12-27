<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<title>Szablon 5</title>
	<meta name="description" content="Tutaj opis strony" />
	<meta name="keywords" content="Tutaj słowa kluczowe"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<link rel="stylesheet" href="style/style.css" type="text/css"/>
	<script type="text/javascript" src="javascript/zegar.js"></script>
	<script type="text/javascript" src="javascript/menu.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet">
	<script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>

<body onload="odliczanie();">
	<div id="container">
		<div id="logo">
			<div id="logotext">Topologie Sieciowe<br /><div id="zegar"></div></div>
			<div id="logoback"> </div>
		</div>
		<div id="content">
			<div id="menu">
				<div id="menutop">Menu</div>
				<a href="#" onclick="magistrala();"><div class="button">Magistrala</div></a>
				<a href="#" onclick="pierscien();"><div class="button">Pierścień</div></a>
				<a href="#" onclick="gwiazda();"><div class="button">Gwiazda</div></a>
				<a href="#" onclick="drzewo();"><div class="button">Drzewo</div></a>
				<a href="#" onclick="siatka();"><div class="button">Siatka</div></a>
				
			</div>
			<div id="text">
				<div id="texttop">Topologia magistrali</div> <br />
						<img src="img/magistrali.png"/> <br />
						<p>Topologia magistrali (topologia szynowa, ang. bus) – jedna z topologii fizycznych sieci komputerowych charakteryzująca się tym, że wszystkie elementy sieci są podłączone do jednej magistrali (zazwyczaj w postaci kabla koncentrycznego). W tej topologii pracują na przykład sieci 10Base-2 czy NMEA 2000.</p>
			</div>
			
			<div id="php">
			<div id="phptop">Formularz zamówienia</div><br/>
				<?php
					echo "Imię: ";
					echo $_POST['imie'];
					echo "<br /><br />";
					echo "Nazwisko: ";
					echo $_POST['nazwisko'];
					echo "<br /><br />";

					echo "Proszę o wystawienie faktury: "; 
					echo $_POST['faktura'];
					echo "<br /><br />";
					echo "Zamawiam budowę sieci w topologi ";
					echo $_POST['topologie'];	
				?>
				<br />
				<br />
				<a href="index.php"><div class="button">Powrót</div></a>
				
			</div>
			<div id="footer"><p>Technik Informatyk Semestr IV Copernicus<br />Michał Dudek-Dudkowski 05.05.2017r &copy; Wszelkie prawa zastrzeżone</p></div>
		</div>
	</div>
</body>
</html>
