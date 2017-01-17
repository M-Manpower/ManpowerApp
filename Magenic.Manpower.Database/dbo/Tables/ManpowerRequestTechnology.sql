CREATE TABLE [dbo].[ManpowerRequestTechnology] (
    [ManpowerRequestID] INT NOT NULL,
    [TechnologyID]      INT NOT NULL,
    CONSTRAINT [FK_ManpowerRequestTechnology_ManpowerRequest] FOREIGN KEY ([ManpowerRequestID]) REFERENCES [dbo].[ManpowerRequest] ([Id]),
    CONSTRAINT [FK_ManpowerRequestTechnology_Technology] FOREIGN KEY ([TechnologyID]) REFERENCES [dbo].[Technology] ([Id])
);




GO
CREATE UNIQUE CLUSTERED INDEX [ClusteredIndex-20170117-175647]
    ON [dbo].[ManpowerRequestTechnology]([ManpowerRequestID] ASC, [TechnologyID] ASC);

