<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php 
        $ville = "Paris";

        echo($ville);
    ?>

    <hr>

    <?php
        $prenom = 'Jean';
        $nom = 'Dupont';

        echo 'Bonjour ' . $prenom . ' ' . $nom . '!'; 
    ?>

    <hr>

    <?php 
        $score = 10;

        echo($score);

        $score = 15;

        echo(' ' . $score);
    ?>

    <hr>

    <?php
        $a = 8;
        $b = 4;
        $total = $a + $b;

        echo('Le total est : ' . $total);
    ?>

    <hr>

    <?php
        $texte = 'Tabata';
        $entier = 10;
        $decimal = 2.5;
        $vraiOuFaux = true;

        var_dump($texte);
        var_dump($entier);
        var_dump($decimal);
        var_dump($vraiOuFaux);
    ?>

    <hr>

    <?php
        $note_maths = 15;
        $note_francais = 12;
        $note_histoire_geo = 9;
        $moyenne = ($note_maths + $note_francais + $note_histoire_geo) / 3;
        echo 'La moyenne est de '.$moyenne.' / 20.';
    ?>

    <hr>

    <?php
        $prix_ht = 50;
        $tva = 20;
        $prix_ttc = $prix_ht * (1 + $tva / 100);
        echo 'Le prix TTC du produit est de '.$prix_ttc.' €.';
    ?>

    <hr>

    <?php
        $animaux = array('Chien', 'Chat', 'Lapin');

        echo $animaux[0].'<br />';
        echo $animaux[1].'<br />';
        echo $animaux[2].'<br />';
    ?>

    <hr>

    <?php
        for($i = 1; $i <= 5; $i++) {
        echo 'Numéro : '.$i.'<br />';
        }
    ?>

    <hr>
    
    <?php
        $couleurs = array('Rouge', 'Vert', 'Bleu');

        foreach($couleurs as $couleur) {
        echo 'La couleur est : '.$couleur.'<br />';
        }
    ?>

    <hr>

    <?php
        $compteur = 10;

        do {
        echo 'Je suis exécuté au moins une fois !<br />';
        $compteur++;
        } while($compteur < 5);
    ?>

    <hr>

    <?php
        $nombre = 7;

        if($nombre % 2 == 0) {
        echo 'C’est un nombre pair';
        } else {
        echo 'C’est un nombre impair';
        }
    ?>

    <hr>

    <?php
        $meteo = 'pluie';

        if($meteo == 'soleil') {
        echo 'Sors les lunettes';
        } else {
        echo 'Prends un parapluie';
        }
    ?>

    <hr>

    <?php
        $age = 23;

        if($age >= 18) {
            echo 'Tu es majeur';
        } else {
            echo 'Tu es mineur';
        }
    ?>

    <hr>

    <?php
        $note = 15;

        if ($note < 10) {
            echo 'Insuffisant';
        } elseif ($note >= 10 && $note <= 13) {
            echo 'Passable';
        } elseif ($note >= 14 && $note <= 16) {
            echo 'Bien';
        } elseif ($note >= 17) {
            echo 'Excellent';
        } else {
            echo 'Note invalide';
        }
    ?>

    <hr>

    <?php
        $age = 21;
        $abonne = true;

        if ($age >= 18 && $abonne) {
            echo 'Accès autorisé';
        } else {
            echo 'Accès refusé';
        }
    ?>

    <hr>

    <?php
        $budget = 1553.89;
        $achats = 1554.76;

        if ($budget < $achats) {
            echo "Vous n'avez pas assez d'argent";
        } else {
            echo "Vous pouvez payer !";
        }
    ?>

    <hr>

    <?php
        $codePostal = 40000;

        while ($codePostal <= 40999) {
            echo $codePostal . '<br>';
            $codePostal++;
        }
    ?>

    <hr>

    <?php
        $nombre = 5;

        for ($i = 1; $i <= 10; $i++) {
            $resultat = $nombre * $i;
            echo "$nombre x $i = $resultat<br>";
        }
    ?>

    <hr>

    <?php
        $prenoms = ['Nuno', 'Angélique', 'Sébastien', 'Nina', 'Adrien'];

        foreach ($prenoms as $prenom) {
            echo $prenom . ' est présent(e).<br>';
        }
    ?>

    <hr>

    <?php
        $equipe = [
        'Nuno' => 'PHP',
        'Angélique' => 'JavaScript',
        'Sébastien' => 'PHP',
        'Nina' => 'Python',
        'Adrien' => 'PHP',
        'Alvyn' => 'PHP',
        'Ilona' => 'JavaScript',
        'Jean-François' => 'PHP',
        'Alan' => 'JavaScript',
        'Guillaume' => 'PHP'
        ];

        foreach ($equipe as $nom => $specialite) {
            if ($specialite === 'PHP') {
                echo $nom . ' est développeur PHP.<br>';
            }
        }
    ?>

    <hr>

    <?php
        $capitales = [
            'France' => 'Paris',
            'Allemagne' => 'Berlin',
            'Italie' => 'Rome'
        ];

        foreach ($capitales as $ville) {
            echo $ville . '<br>';
        }
    ?>

    <hr>

    <?php
        $valeurs = [];
        for ($i = 0; $i < 10; $i++) {
            $valeurs[] = rand(0, 100);
        }

        $inferieur50 = [];
        $superieurOuEgal50 = [];

        foreach ($valeurs as $nombre) {
            if ($nombre < 50) {
                $inferieur50[] = $nombre;
            } else {
                $superieurOuEgal50[] = $nombre;
            }
        }

        echo "Nombres générés :<br>";
        echo implode(', ', $valeurs) . "<br><br>";

        echo "Valeurs inférieures à 50 :<br>";
        echo implode(', ', $inferieur50) . "<br><br>";

        echo "Valeurs supérieures ou égales à 50 :<br>";
        echo implode(', ', $superieurOuEgal50) . "<br>";
    ?>

    <hr>

</body>
</html>