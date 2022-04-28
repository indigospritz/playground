@ECHO OFF
for /L %%A in (1,1,10000) do (
	echo flushing the toilet...
	ipconfig/flushdns
	timeout /t 5
)