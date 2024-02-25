esCero :: Int -> Bool
esCero x = x == 0

esPositivo :: Int -> Bool
esPositivo x = x > 0

esVocal :: Char -> Bool
esVocal x = (x == 'a') || (x == 'e') || (x == 'i')

valorAbsoluto :: Int -> Int
valorAbsoluto x | x>=0 = x
                | x<0 = -x

paraTodo :: [Bool] -> Bool
paraTodo[] = True
paraTodo(x:xs) = x && paraTodo xs

sumatoria:: [Int] -> Int
sumatoria[] = 0
sumatoria(x:xs) = x + sumatoria xs

productoria :: [Int] -> Int
productoria [] = 1
productoria (x:xs) = x * productoria xs

factorial :: Int -> Int
factorial 2 = 2
factorial x | x>=0 = x*(x-1)
            | x<0 = undefined

promedio :: [Int] -> Int
promedio (x:xs) = sumatoria(x:xs) `div` length(x:xs)

pertenece :: Int -> [Int] -> Bool
pertenece x [] = False
pertenece z (x:xs) = z == x || pertenece z xs

paraTodo' :: [a] -> (a -> Bool) -> Bool
paraTodo' [] f = True
paraTodo' (x:xs) f = f x && paraTodo' xs f

existe' :: [a] -> (a -> Bool) -> Bool
existe' [] f = False
existe' (x:xs) f = f x || existe' xs f

sumatoria' :: [a] -> (a->Int) -> Int
sumatoria' [] f = 0
sumatoria' (x:xs) f = f x + sumatoria' xs f

paraTodo'' :: [Bool] -> Bool
paraTodo'' xs = paraTodo' xs id

todosPares :: [Int] -> Bool
todosPares xs = paraTodo' xs even 

esMultiplo :: Int -> Int -> Bool
esMultiplo x n = (x `mod` n) == 0

hayMultiplo:: Int -> [Int] -> Bool
hayMultiplo x [] = False
hayMultiplo z xs = existe' xs (esMultiplo z )

sumaCuadrados ::Int -> Int
sumaCuadrados x = sumatoria' [0..x] (^2)

esDivisor :: Int -> Int -> Bool
esDivisor z x = (z `mod` x ) == 0

existeDivisor :: Int -> [Int] -> Bool
existeDivisor z [x] = (z `mod` x) == 0
existeDivisor z (x:xs) = existe' xs (esDivisor z)

esPrimo :: Int -> Bool
esPrimo 2 = True
esPrimo 1 = False
esPrimo x = not (existeDivisor x [2..x-1]) && (x /= 4)

factorial' :: Int -> Int
factorial' x = productoria [2..x]

filtrarPrimos :: [Int] -> [Int]
filtrarPrimos [] = []
filtrarPrimos (x:xs) | esPrimo x = x : filtrarPrimos xs
                     | otherwise = filtrarPrimos xs

multiplicaPrimos :: [Int] -> Int
multiplicaPrimos xs = productoria (filtrarPrimos(xs))

fib :: Int -> Int
fib 0 = 0
fib 1 = 1
fib x = fib (x-1) + fib (x-2) 

esFib :: Int -> Bool
esFib n = esFibAux n 0 1

esFibAux :: Int -> Int -> Int -> Bool
esFibAux n a b
    | n < 0     = False
    | n == a    = True
    | n < a     = False
    | otherwise = esFibAux n b (a + b)

todosFib :: [Int] -> Bool
todosFib [] = True
todosFib (x:xs) = paraTodo' xs (esFib)

duplicaValor :: [Int] -> [Int]
duplicaValor [] = []
duplicaValor (x:xs) = x*2 : duplicaValor xs

duplicaValor' :: [Int] -> [Int]
duplicaValor' xs = map (*2) xs

filtrarPrimos' :: [Int] -> [Int]
filtrarPrimos' [] = []
filtrarPrimos' (x:xs) | esPrimo x = x : filtrarPrimos' xs
                      | (esPrimo x) == False = filtrarPrimos' xs

filtrarPrimos'' :: [Int] -> [Int]
filtrarPrimos'' xs = filter esPrimo xs

multiplicaPrimos' :: [Int] -> Int
multiplicaPrimos' xs = productoria (filter esPrimo xs)

primIgualesA :: Eq a =>  a -> [a] -> [a]
primIgualesA z [] = []
primIgualesA z (x:xs) | (x == z) = x: primIgualesA z xs
                      | otherwise = primIgualesA z xs

primIgualesA' :: Eq a => a -> [a] -> [a]
primIgualesA' z [] = []
primIgualesA' z xs = takeWhile (==z) xs

primIguales :: Eq a => [a] -> [a]
primIguales [] = []
primIguales (x:[]) = (x:[]) 
primIguales (x:y:xs)| x == y = x : primIguales (y:xs)
                    | otherwise = (x:[])

primIguales' ::Eq a => [a] -> [a]
primIguales' (x:xs) = x: primIgualesA' x xs

cuantGen :: (b -> b -> b ) -> b -> [a] -> ( a -> b) -> b
cuantGen op z xs t = 