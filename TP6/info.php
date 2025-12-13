<?php
$nomEtablissement = "FSSM";
$module = "Programmation Web";
$annee = 2025;

$nombre1 = 10;
$nombre2 = 5;

$somme = $nombre1 + $nombre2;
$produit = $nombre1 * $nombre2;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Info PHP</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #333;
        }
        p {
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <h1>Informations PHP</h1>
    <p><strong>Nom de l'établissement :</strong><?php echo $nomEtablissement; ?></p>
    <p><strong>Module :</strong> <?php echo $module; ?></p>
    <p><strong>Année :</strong> <?php echo $annee; ?></p>
    <p><strong>Résultat d'addition (<?php echo $nombre1; ?> + <?php echo $nombre2; ?>) :</strong> <?php echo $somme; ?></p>
    <p><strong>Résultat de multiplication (<?php echo $nombre1; ?> × <?php echo $nombre2; ?>) :</strong> <?php echo $produit; ?></p>
</body>
</html>