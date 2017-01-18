CREATE TABLE [dbo].[ReferenceNumber] (
    [Id]                INT           NULL,
    [ReferenceString]   NVARCHAR (50) NOT NULL,
    [DateCreated]       DATETIME      NOT NULL,
    [DateUpdated]       DATETIME      NULL,
    [ManpowerRequestId] INT           NOT NULL,
    [StatusID]          INT           NOT NULL,
    CONSTRAINT [FK_ReferenceNumber_ManpowerRequest] FOREIGN KEY ([ManpowerRequestId]) REFERENCES [dbo].[ManpowerRequest] ([Id]),
    CONSTRAINT [FK_ReferenceNumber_Status] FOREIGN KEY ([StatusID]) REFERENCES [dbo].[Status] ([Id])
);






GO
CREATE UNIQUE NONCLUSTERED INDEX [NonClusteredIndex-20170117-175850]
    ON [dbo].[ReferenceNumber]([ReferenceString] ASC);

